const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('blacklist')
        .setDescription('Agrega a la lista negra')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario a blacklistear')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const user = interaction.options.getUser('usuario');
        await interaction.reply(`Usuario ${user.tag} agregado a la lista negra.`);
    },
};