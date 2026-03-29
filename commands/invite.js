const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Genera un enlace de invitación al servidor'),

    async execute(interaction) {
        try {
            const invite = await interaction.channel.createInvite({ maxAge: 0, maxUses: 0 });
            await interaction.reply(`Invitación: ${invite.url}`);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'No pude crear una invitación.', ephemeral: true });
        }
    },
};