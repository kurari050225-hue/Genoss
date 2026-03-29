const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('antiraid')
        .setDescription('Activa anti-raid')
        .addBooleanOption(option =>
            option.setName('activar')
                .setDescription('Activar o desactivar')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const activate = interaction.options.getBoolean('activar');
        await interaction.reply(`Anti-raid ${activate ? 'activado' : 'desactivado'}.`);
    },
};