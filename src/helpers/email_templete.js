// import {
//     Body,
//     Button,
//     Container,
//     Column,
//     Head,
//     Heading,
//     Hr,
//     Html,
//     Img,
//     Link,
//     Preview,
//     Row,
//     Section,
//     Text,
//   } from "@react-email/components";
//   import { Tailwind } from "@react-email/tailwind";

// interface VercelInviteUserEmailProps {
//   username?: string;
//   userImage?: string;
//   invitedByUsername?: string;
//   invitedByEmail?: string;
//   teamName?: string;
//   teamImage?: string;
//   inviteLink?: string;
//   inviteFromIp?: string;
//   inviteFromLocation?: string;
// }

// const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const VercelInviteUserEmail = ({ username, lastName, company }) => {
  // const previewText = `Join ${invitedByUsername} on Vercel`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="und">
   <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Template</title><!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <style type="text/css">
  .rollover:hover .rollover-first {
    max-height:0px!important;
    display:none!important;
    }
    .rollover:hover .rollover-second {
    max-height:none!important;
    display:block!important;
    }
    .rollover span {
    font-size:0px;
    }
    u + .body img ~ div div {
    display:none;
    }
    #outlook a {
    padding:0;
    }
    span.MsoHyperlink,
  span.MsoHyperlinkFollowed {
    color:inherit;
    mso-style-priority:99;
    }
    a.es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
    }
    a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
    }
    .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
    }
    .es-button-border:hover > a.es-button {
    color:#ffffff!important;
    }
  @media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .es-text-4574 .es-text-mobile-size-16, .es-text-4574 .es-text-mobile-size-16 * { font-size:16px!important; line-height:150%!important } }
  @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
  </style>
   </head>
   <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="und" style="background-color:#CAC9C9"><!--[if gte mso 9]>
   <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
     <v:fill type="tile"  color="#cac9c9" origin="0.5, 0" position="0.5, 0"></v:fill>
   </v:background>
  <![endif]-->
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CAC9C9">
       <tr>
        <td valign="top" style="padding:0;Margin:0">
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
           <tr>
            <td class="es-info-area" align="center" style="padding:0;Margin:0">
             <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
               <tr>
                <td align="left" bgcolor="#fefdfd" style="padding:0;Margin:0;background-color:#fefdfd;background-image:url(https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/image_RDE.png);background-repeat:no-repeat;background-position:left top" background="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/image_RDE.png">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-infoblock" style="padding:0;Margin:0;padding-top:15px;padding-right:15px;padding-bottom:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">​</a></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
               <tr>
                <td align="left" bgcolor="#efefef" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;background-color:#efefef">
                 <table cellpadding="0" cellspacing="0" align="right" class="es-right" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:20px;font-size:0px"><a target="_blank" href="https://foxeventss.com" style="mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:14px"><img src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/logo.png" alt="Logo" style="display:block;font-size:12px;border:0;outline:none;text-decoration:none" width="200" title="Logo" class="adapt-img"></a></td>
                       </tr>
                       <tr>
                        <td style="padding:0;Margin:0">
                         <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr class="links">
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:15px;padding-bottom:15px;padding-right:5px;padding-left:5px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#f1c232;font-size:14px">FUN</a></td>
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:15px;padding-bottom:15px;padding-right:5px;padding-left:5px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#f1c232;font-size:14px">ORIGINAL</a></td>
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:15px;padding-bottom:15px;padding-right:5px;padding-left:5px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#f1c232;font-size:14px">EXPERIENCE</a></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
               <tr>
                <td align="left" style="Margin:0;padding-top:15px;padding-right:20px;padding-left:20px;padding-bottom:30px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;font-size:0px"><img src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/background.jpg" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" class="adapt-img" width="510"></td>
                       </tr>
                       <tr>
                        <td align="center" class="es-m-p0r es-m-p0l es-text-4574" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-right:40px;padding-left:40px"><p align="center" style="Margin:0;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px !important;letter-spacing:0;color:#333333;font-size:14px"><em>Greetings <b>${username} ${" "} ${lastName}</b> From <b>${company}</b>, Thank you for reaching out to us regarding your event inquiry. We're thrilled to hear about your interest in hosting an event with us. We're excited about the opportunity to potentially work together to make your event a memorable one.</em></p></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#F1C232;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://t.me/foxeventss" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#F1C232;border-radius:5px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #F1C232">Contact Us</a></span></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="Margin:0;padding-right:20px;padding-bottom:10px;padding-left:20px;padding-top:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:10px"><h1 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:bold;line-height:55px;color:#333333">Why Us?</h1></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:90px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:90px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><img src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/idea.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" width="90" class="adapt-img"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td><td style="width:30px"></td><td style="width:440px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="center" style="padding:0;Margin:0;width:440px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#f1c232">LEARN</h3></td>
                       </tr>
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">By thoroughly understanding the client's needs, the business character, and how the firm operates, we become valued contributors to the client's team.</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td></tr></table><![endif]--></td>
               </tr>
               <tr>
                <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table dir="ltr" cellpadding="0"><table dir="rtl" style="width:560px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:440px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:90px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><img src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/researchanddevelopment.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" width="90" class="adapt-img"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td><td dir="ltr" style="width:30px"></td><td dir="ltr" style="width:90px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:440px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#f1c232">DEVELOP</h3></td>
                       </tr>
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">We are here to organize, coordinate, and design the event while making sure of the details.</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td></tr></table></table><![endif]--></td>
               </tr>
               <tr>
                <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:90px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                   <tr>
                    <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:90px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;font-size:0px"><img src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/distribution.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none" width="90" class="adapt-img"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td><td style="width:30px"></td><td style="width:440px" valign="top"><![endif]-->
                 <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                   <tr>
                    <td align="center" style="padding:0;Margin:0;width:440px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:10px"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#f1c232">DELIVER</h3></td>
                       </tr>
                       <tr>
                        <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">We take full responsibility for ensuring that every event is executed professionally from start to finish.</p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table><!--[if mso]></td></tr></table><![endif]--></td>
               </tr>
               <tr>
                <td align="left" style="Margin:0;padding-right:20px;padding-bottom:10px;padding-left:20px;padding-top:20px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-m-txt-l" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:26px;font-style:normal;font-weight:bold;line-height:31px;color:#f1c232">What F.O.X Event Offers</h2></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td class="esdev-adapt-off" align="left" style="Margin:0;padding-top:15px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                   <tr>
                    <td class="esdev-mso-td es-m-w50" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:50px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/link2.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:16px" width="50"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                    <td class="es-m-w0" style="padding:0;Margin:0;width:20px"></td>
                    <td class="esdev-mso-td es-m-w50" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:490px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="left" style="padding:0;Margin:0;padding-top:15px;padding-right:15px;padding-bottom:15px"><p align="left" style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Venues For Your Events</p></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td class="esdev-adapt-off" align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                   <tr>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:50px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/link2.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:16px" width="50"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                    <td style="padding:0;Margin:0;width:20px"></td>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:490px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="left" style="padding:0;Margin:0;padding-top:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Experienced and Vetted DJs and Bands</p></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td class="esdev-adapt-off" align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                   <tr>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:50px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/link2.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:16px" width="50"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                    <td style="padding:0;Margin:0;width:20px"></td>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:490px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="left" style="padding:0;Margin:0;padding-top:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Best Catering Service Providers</p></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td class="esdev-adapt-off" align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                   <tr>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:50px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/link2.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:16px" width="50"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                    <td style="padding:0;Margin:0;width:20px"></td>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:490px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="left" style="padding:0;Margin:0;padding-top:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Best Photographers to Capture the Best Moments</p></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td class="esdev-adapt-off" align="left" style="Margin:0;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px">
                 <table cellpadding="0" cellspacing="0" class="esdev-mso-table" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:560px">
                   <tr>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:50px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/link2.png" alt="" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none;border-radius:16px" width="50"></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                    <td style="padding:0;Margin:0;width:20px"></td>
                    <td class="esdev-mso-td" valign="top" style="padding:0;Margin:0">
                     <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                       <tr>
                        <td align="left" style="padding:0;Margin:0;width:490px">
                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="left" style="padding:0;Margin:0;padding-top:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Equipment Rental Service Providers</p></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-top:20px">
                 <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://efqioos.stripocdn.email/content/guids/CABINET_ef183ffbda4b41785ff855ea5744499c5fb621e6f1f5c2aa4fa5abfaa82c4e6d/images/business_cards07.jpg" alt="" width="560" class="adapt-img" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
               <tr>
                <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:30px">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:5px" role="presentation">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#F1C232;border-width:0px;display:inline-block;border-radius:6px;width:auto"><a href="" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:10px 30px 10px 30px;display:inline-block;background:#F1C232;border-radius:6px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #F1C232;border-left-width:30px;border-right-width:30px">Contact Us</a></span></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
           <tr>
            <td align="center" style="padding:0;Margin:0">
             <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
               <tr>
                <td align="left" bgcolor="#efefef" style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:20px;background-color:#efefef">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="left" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                         <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr>
                            <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://facebook.com/foxeventss" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Facebook" src="https://efqioos.stripocdn.email/content/assets/img/social-icons/rounded-colored/facebook-rounded-colored.png" alt="Fb" height="34" width="34" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                            <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://x.com/foxeventss" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="X.com" src="https://efqioos.stripocdn.email/content/assets/img/social-icons/rounded-colored/x-rounded-colored.png" alt="X" height="34" width="34" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                            <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://instagram.com/foxeventss" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Instagram" src="https://efqioos.stripocdn.email/content/assets/img/social-icons/rounded-colored/instagram-rounded-colored.png" alt="Inst" height="34" width="34" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                            <td align="center" valign="top" class="es-m-p0r" style="padding:0;Margin:0;padding-right:40px"><a target="_blank" href="https://youtube.comfoxeventss" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Youtube" src="https://efqioos.stripocdn.email/content/assets/img/social-icons/rounded-colored/youtube-rounded-colored.png" alt="Yt" height="34" width="34" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                            <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://linkedin.comfoxeventss" style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img title="Linkedin" src="https://efqioos.stripocdn.email/content/assets/img/social-icons/rounded-colored/linkedin-rounded-colored.png" alt="In" height="34" width="34" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                           </tr>
                         </table></td>
                       </tr>
                       <tr>
                        <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">F.O.X EVENTS © 2024 Fox Events, Inc. All Rights Reserved.</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#333333;font-size:12px">4562 Bole Road, Addis Ababa, Ethiopia, AA, 607898</p></td>
                       </tr>
                       <tr>
                        <td style="padding:0;Margin:0">
                         <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                           <tr class="links">
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px"><a target="_blank" href="https://foxeventss.com" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Visit Us </a></td>
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"><a target="_blank" href="https://foxeventss.com/privacy_policy" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Privacy Policy</a></td>
                            <td align="center" valign="top" width="33.33%" style="Margin:0;border:0;padding-top:5px;padding-bottom:5px;padding-right:5px;padding-left:5px;border-left:1px solid #cccccc"><a target="_blank" href="https://foxeventss.com/terms" style="mso-line-height-rule:exactly;text-decoration:none;font-family:arial, 'helvetica neue', helvetica, sans-serif;display:block;color:#333333;font-size:12px">Terms of Use</a></td>
                           </tr>
                         </table></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table>
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
           <tr>
            <td class="es-info-area" align="center" style="padding:0;Margin:0">
             <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#FFFFFF" role="none">
               <tr>
                <td align="left" style="padding:20px;Margin:0">
                 <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                   <tr>
                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                     <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                       <tr>
                        <td align="center" class="es-infoblock" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px"><a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a>No longer want to receive these emails?&nbsp;<a href="" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">Unsubscribe</a>.<a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a></p></td>
                       </tr>
                     </table></td>
                   </tr>
                 </table></td>
               </tr>
             </table></td>
           </tr>
         </table></td>
       </tr>
     </table>
    </div>
   </body>
  </html>`;
};

export const foxEmail = (data) => {

  const remaining_days = Math.floor((new Date(data['event-date']) - new Date()) / (1000 * 60 * 60 * 24));

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Form Submission</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border: 1px solid #ddd;
          }
          h2 {
              color: #333;
          }
          .details {
              margin-bottom: 20px;
          }
          .details table {
              width: 100%;
              border-collapse: collapse;
          }
          .details table th,
          .details table td {
              padding: 8px;
              text-align: left;
              border-bottom: 1px solid #ddd;
          }
          .details table th {
              background-color: #f2f2f2;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>New Form Submission From ${data['first-name']} ${" "}  ${data['last-name']}</h2>
          <div class="details">
              <table id="formTable">
              ${
                Object.keys(data).map(key => {
                  //clean the key to make it more readable
                  //when a key name "event-date" is passed, compute the remaining days to the event
                  if (key === 'event-date') {
                    return `<tr>
                        <td>Event Date</td>
                        <td>${new Date(data[key]).toDateString() + " : Event Is In <b>" + remaining_days}</b> Days</td>
                    </tr>`
                  }
                  //when a key name "min-budget" and "max-budget" is passed, merge them as Budget and display the range but skip this if if this second time it is called
                  
                  if (key === 'min-budget') {
                    //format the min and max budget to number format
                    data['min-budget'] = parseInt(data['min-budget']).toLocaleString();
                    data['max-budget'] = parseInt(data['max-budget']).toLocaleString();
                    return `<tr>
                        <td>Budget Allocated</td>
                        <td>From <b>${data['min-budget']}</b> to <b>${data['max-budget']}</b></td>
                    </tr>`
                  }
                  if (key === 'max-budget') {
                    return ''
                  }
                  if(key === 'number-of-people'){
                    //convert the format "5to20" to "5 - 20"
                    data[key] = String(data[key]).replace('to', ' - ');
                    return `<tr>
                        <td>Number of People</td>
                        <td>${data[key]}</td>
                    </tr>`
                  }
                  
                  const new_key = key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                  return `<tr>
                      <td>${new_key}</td>
                      <td>${data[key]}</td>
                  </tr>`
                }).join('')
              }
              </table>
          </div>
          <p>Please review the details provided and take the necessary actions accordingly.</p>
      </div>
  </body>
  </html>
  `
};

// VercelInviteUserEmail.PreviewProps = {
//   username: "alanturing",
//   userImage: `${baseUrl}/static/vercel-user.png`,
//   invitedByUsername: "Alan",
//   invitedByEmail: "alan.turing@example.com",
//   teamName: "Enigma",
//   teamImage: `${baseUrl}/static/vercel-team.png`,
//   inviteLink: "https://vercel.com/teams/invite/foo",
//   inviteFromIp: "204.13.186.218",
//   inviteFromLocation: "São Paulo, Brazil",
// } ;

// export default VercelInviteUserEmail;
