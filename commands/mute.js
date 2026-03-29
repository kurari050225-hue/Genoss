const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Silencia a un usuario temporalmente')
        .addUserOption(option =>
            option.setName('usuario')
                .setDescription('El usuario a silenciar')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('duracion')
                .setDescription('Duración en minutos (máximo 40320 minutos = 28 días)')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(40320))
        .addStringOption(option =>
            option.setName('razon')
                .setDescription('Razón del silencio')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),

    async execute(interaction) {
        const user = interaction.options.getUser('usuario');
        const duration = interaction.options.getInteger('duracion');
        const reason = interaction.options.getString('razon') || 'No especificada';

        if (!interaction.member.permissions.has(PermissionFlagsBits.ModerateMembers)) {
            return interaction.reply({ content: 'No tienes permisos para silenciar usuarios.', ephemeral: true });
        }

        const member = await interaction.guild.members.fetch(user.id);
        if (!member) {
            return interaction.reply({ content: 'Usuario no encontrado en el servidor.', ephemeral: true });
        }

        try {
            await member.timeout(duration * 60 * 1000, reason);
            await interaction.reply(`Usuario ${user.tag} silenciado por ${duration} minutos. Razón: ${reason}`);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Hubo un error al silenciar al usuario.', ephemeral: true });
        }
    },
};