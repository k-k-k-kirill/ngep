module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "info@ngep.eu",
        from: "your verified email address",
        replyTo: "info@ngep.eu",
        subject: "New form submission on NGEP website",
        text: `
            Name: ${result.Name}
            Email: ${result.Email}
            Company website: ${result.CompanyWebsite}
            Message: ${result.Message}
        `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
