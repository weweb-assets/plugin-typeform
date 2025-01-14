export default {
    editor: {
        designSystemId: 'eb160add-c723-4258-9686-e8c31e04cd86',
        /* wwEditor:start */
        settings: {
            copilot: {
                description: 'Configure the Typeform plugin settings',
                returns: 'void',
                schema: {
                    designSystemId: {
                        type: 'string',
                        description: 'The unique identifier for the design system',
                        bindable: false
                    }
                }
            }
        }
        /* wwEditor:end */
    },
};