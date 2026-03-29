const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unlock')
        .setDescription('Desbloquea el canal para miembros')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) {
            return interaction.reply({ content: 'No tienes permisos para desbloquear canales.', ephemeral: true });
        }

        try {
            await interaction.channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
                SendMessages: null,
            });
            await interaction.reply('Canal desbloqueado.');
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Error al desbloquear el canal.', ephemeral: true });
        }
    },
};