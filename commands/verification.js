const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verification')
        .setDescription('Configura verificación')
        .addBooleanOption(option =>
            option.setName('activar')
                .setDescription('Activar o desactivar')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const activate = interaction.options.getBoolean('activar');
        await interaction.reply(`Verificación ${activate ? 'activada' : 'desactivada'}.`);
    },
};