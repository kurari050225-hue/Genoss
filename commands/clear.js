const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Borra una cantidad de mensajes')
        .addIntegerOption(option =>
            option.setName('cantidad')
                .setDescription('Número de mensajes a borrar (1-100)')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(100))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction) {
        const amount = interaction.options.getInteger('cantidad');

        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
            return interaction.reply({ content: 'No tienes permisos para borrar mensajes.', ephemeral: true });
        }

        try {
            const messages = await interaction.channel.bulkDelete(amount, true);
            await interaction.reply({ content: `Borrados ${messages.size} mensajes.`, ephemeral: true });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Hubo un error al borrar los mensajes.', ephemeral: true });
        }
    },
};