const Types = {
    INIT_COMMAND: "init_command",
    LAST_COMMAND: "last_command",
}

const initCommand = (payload) => ({
    type: Types.INIT_COMMAND,
    payload,
})

const actions = {
    initCommand,
}

export {
    actions,
    Types
};