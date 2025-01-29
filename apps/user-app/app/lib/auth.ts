import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import  prisma  from "@repo/db/client";
import nextAppLoader from "next/dist/build/webpack/loaders/next-app-loader";


export const authOptions = {
    providers: [
        CredentialsProvider({

          name: 'Phone Number',

          credentials: {
            phone : { label: "Phone Number", type: "text", placeholder: "1234567890" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials : any) {
            const hashedPassword = await bcrypt.hash(credentials.password , 10);
            const exisistingUser = await prisma.user.findFirst({
                where : {
                    phone : credentials.phone
                }
            })
            if(exisistingUser){
                const passwordValidation = await bcrypt.compare(credentials.password , exisistingUser.password);
                if(passwordValidation){
                    return {
                        id : exisistingUser.id.toString(),
                        name : exisistingUser.name,
                        email : exisistingUser.email
                    }
                }
                return null

            }
            try{
                const user = await prisma.user.create({
                    data : {
                        phone : credentials.phone,
                        password : hashedPassword
                    }
                })
                return {
                    id : user.id.toString(),
                    name : user.name,
                    email : user.email
                }

            }
            catch(e){
                console.log(e);
            }

            return null;

          }

        })
      ],
      secret: process.env.JWT_SECRET || "secret",
      callbacks: {
        
        async session({ token, session }: any) {
            session.user.id = token.sub
            return session
            }
        }
}