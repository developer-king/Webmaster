import axios from "axios";
import emailjs from 'emailjs-com' ;

export const sendEmailVerifyLink = async (link, receiver) => {
    try {

        let message = `
            <html>
                <body>
                    <h1>Email Verify Link</h1><br/>
        ` ;

        message += ( "Link : <a href='" + link + "'>" + link + "</a><br/>") ;
        message += ( "Please, Click this link") ;

        message += `
            </body>
                </html>
        ` ;

        let templateParams = {
            from_email : process.env.REACT_APP_ADMIN_EMAIL ,
            to_email : receiver,
            message : message
        }


        let data = {
            service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            user_id: process.env.REACT_APP_EMAIL_USER_ID,
            template_params: {
                ...templateParams
            }
        };

        let res = await axios.post('https://api.emailjs.com/api/v1.0/email/send' , data) ;

        console.log(res) ;

        return true ;

    } catch(err) {
        console.log(err) ;
        return false ;
    }
}


export const sendChangePasswordLink = async (link, receiver) => {
    try {

        let message = `
            <html>
                <body>
                    <h1>Change Password Link</h1><br/>
        ` ;

        message += ( "Did you forgot password?<br/>") ;
        message += ( "Link : <a href='" + link + "'>" + link + "</a><br/>") ;
        message += ( "Please, Click this link") ;

        message += `
            </body>
                </html>
        ` ;

        let templateParams = {
            from_email : process.env.REACT_APP_ADMIN_EMAIL ,
            to_email : receiver,
            message : message
        }


        let data = {
            service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            user_id: process.env.REACT_APP_EMAIL_USER_ID,
            template_params: {
                ...templateParams
            }
        };

        let res = await axios.post('https://api.emailjs.com/api/v1.0/email/send' , data) ;

        console.log(res) ;

        return true ;

    } catch(err) {
        console.log(err) ;
        return false ;
    }
}
