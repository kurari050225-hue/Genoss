const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Expulsa a un usuario del servidor')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('El usuario a expulsar')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('razon')
                .setDescription('Razón de la expulsión')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

    async execute(interaction) {
        const user = interaction.options.getUser('usuario');
        const reason = interaction.options.getString('razon') || 'No especificada';

        if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) {
            return interaction.reply({ content: 'No tienes permisos para expulsar usuarios.', ephemeral: true });
        }

        try {
            await interaction.guild.members.kick(user, reason);
            await interaction.reply(`Usuario ${user.tag} expulsado por: ${reason}`);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Hubo un error al expulsar al usuario.', ephemeral: true });
        }
    },
};