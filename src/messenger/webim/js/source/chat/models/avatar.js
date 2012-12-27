/**
 * @preserve This file is part of Mibew Messenger project.
 * http://mibew.org
 * 
 * Copyright (c) 2005-2011 Mibew Messenger Community
 * License: http://mibew.org/license.php
 */

(function(Mibew, _){

    /**
     * @class Represents agent's avatar
     */
    Mibew.Models.Avatar = Mibew.Models.Base.extend(
        /** @lends Mibew.Models.Avatar.prototype */
        {
            /**
             * A list of default model values.
             * @type Object
             */
            defaults : {
                /**
                 * An URL of the avatar image or false by default.
                 * @type String|Boolean
                 */
                imageLink: false
            },

            /**
             * Model initializer.
             */
            initialize: function() {
                // Register API function
                Mibew.Objects.server.registerFunction(
                    'setupAvatar',
                    _.bind(this.apiSetupAvatar, this)
                );
            },

            /**
             * Set avatar
             * This is an API function.
             * @param args {Object} An object of passed arguments
             */
            apiSetupAvatar: function(args) {
                if (args.imageLink) {
                    this.set({imageLink: args.imageLink});
                }
            }
        }
    );

})(Mibew, _);