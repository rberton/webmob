/*
 * File: app/view/main.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('devmob.view.main', {
    extend: 'Ext.tab.Panel',

    config: {
        items: [
            {
                xtype: 'panel',
                title: 'accueil',
                iconCls: 'home',
                html: '<h1>Accueil</h1>',
                styleHtmlContent: true
            },
            {
                xtype: 'carousel',
                title: 'carousel',
                iconCls: 'reply',
                html: '',
                styleHtmlContent: true,
                items: [
                    {
                        xtype: 'container',
                        html: 'Première fiche',
                        styleHtmlContent: true
                    },
                    {
                        xtype: 'container',
                        html: 'Seconde fiche',
                        styleHtmlContent: true
                    },
                    {
                        xtype: 'container',
                        html: 'Troisième fiche',
                        styleHtmlContent: true
                    }
                ]
            },
            {
                xtype: 'list',
                title: 'liste',
                iconCls: 'user',
                html: '',
                id: 'listevue',
                itemId: 'listevue',
                styleHtmlContent: true,
                itemTpl: [
                    '<b>{id}</b> {auteur} - {nom}'
                ],
                store: 'bdStore'
            },
            {
                xtype: 'map',
                title: 'carte',
                iconCls: 'maps',
                html: '',
                styleHtmlContent: true
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});