'use server'

export async function sendContactEmail(formData: {
  name: string
  email: string
  message: string
}) {
  try {
    // Using Resend API to send email
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'contact@andixd.com',
        to: 'andi@andixd.com',
        subject: 'Interested in working with you, Andi',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
