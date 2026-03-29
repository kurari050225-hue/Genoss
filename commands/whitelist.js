const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whitelist')
        .setDescription('Agrega a la lista blanca')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('Usuario a whitelistear')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const user = interaction.options.getUser('usuario');
        await interaction.reply(`Usuario ${user.tag} agregado a la lista blanca.`);
    },
};