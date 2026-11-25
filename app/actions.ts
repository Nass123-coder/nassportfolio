/* app/actions.ts */
"use server";

export async function requestCVDownload() {
  // In a real app, you would use a library like 'resend' or 'nodemailer' here.
  // Example: await resend.emails.send({ to: 'guenenasserou@gmail.com', ... })
  
  console.log("🔔 ALERT: Someone just clicked the CV download button!");
  console.log("An email notification would be sent to: guenenasserou@gmail.com");
  
  // We simulate a slight delay to mimic a network request
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return { success: true };
}