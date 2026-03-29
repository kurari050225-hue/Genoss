const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Banea a un usuario del servidor')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('El usuario a banear')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('razon')
                .setDescription('Razón del baneo')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(interaction) {
        const user = interaction.options.getUser('usuario');
        const reason = interaction.options.getString('razon') || 'No especificada';

        if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
            return interaction.reply({ content: 'No tienes permisos para banear usuarios.', ephemeral: true });
        }

        try {
            await interaction.guild.members.ban(user, { reason });
            await interaction.reply(`Usuario ${user.tag} baneado por: ${reason}`);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Hubo un error al banear al usuario.', ephemeral: true });
        }
    },
};