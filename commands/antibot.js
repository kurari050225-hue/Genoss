const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('antibot')
        .setDescription('Activa anti-bot')
        .addBooleanOption(option =>
            option.setName('activar')
                .setDescription('Activar o desactivar')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const activate = interaction.options.getBoolean('activar');
        await interaction.reply(`Anti-bot ${activate ? 'activado' : 'desactivado'}.`);
    },
};