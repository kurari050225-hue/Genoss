const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('captcha')
        .setDescription('Configura captcha')
        .addBooleanOption(option =>
            option.setName('activar')
                .setDescription('Activar o desactivar')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const activate = interaction.options.getBoolean('activar');
        await interaction.reply(`Captcha ${activate ? 'activado' : 'desactivado'}.`);
    },
};