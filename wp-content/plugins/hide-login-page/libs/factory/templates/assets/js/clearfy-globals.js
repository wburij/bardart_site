/*!
 * Р“Р»РѕР±Р°Р»СЊРЅС‹Р№ JS С„Р°Р№Р», РєРѕС‚РѕСЂС‹Р№ СЂРµРіРёСЃС‚СЂРёСЂСѓРµС‚ РіР»РѕР±Р°Р»СЊРЅС‹Рµ РїРµСЂРµРјРµРЅРЅС‹Рµ СЃ РѕР±С‰РёРјРё РјРµС‚РѕРґР°РјРё РґР»СЏ РІСЃРµС… РєРѕРјРїРѕРЅРµРЅС‚РѕРІ Clearfy
 * Рё СЃР°РјРѕРіРѕ Clearfy.
 *
 * $.wbcr_factory_templates_126.app - РјРµС‚РѕРґС‹ РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РїСЂРёР»РѕР¶РµРЅРёРµРј. РЎРєСЂС‹С‚СЊ, РїРѕРєР°Р·Р°С‚СЊ СѓРІРµРґРѕРјР»РµРЅРёСЏ.
 * $.wbcr_factory_templates_126.hooks - СЌС‚Рѕ РёРјРјРёС‚Р°С†РёСЏ С…СѓРєРѕРІ Рё С„РёР»СЊС‚СЂРѕРІ Р°РЅР°Р»РѕРіРёС‡РЅРѕ С‚РµРј, С‡С‚Рѕ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ РІ Wordpress
 *
 * Copyright 2018, Webcraftic, http://webcraftic.com
 * 
 * @since 2.0.5
 * @pacakge clearfy
 */
(function($) {
	'use strict';

	if( !$.wbcr_factory_templates_126 ) {
		$.wbcr_factory_templates_126 = {};
	}

	//todo: РџРµСЂРµРѕРїСЂРµРґР»РµРЅРёРµ РґР»СЏ СЃРѕРІРјРµСЃС‚РёРјРѕСЃС‚Рё СЃРѕ СЃС‚Р°СЂС‹РјРё РІРµСЂСЃРёСЏРјРё РїР»Р°РіРёРЅРѕРІ.
	$.wbcr_factory_templates_126.filters = $.wbcr_factory_templates_126.filters || $.wfactory_473.filters;
	//todo: РџРµСЂРµРѕРїСЂРµРґР»РµРЅРёРµ РґР»СЏ СЃРѕРІРјРµСЃС‚РёРјРѕСЃС‚Рё СЃРѕ СЃС‚Р°СЂС‹РјРё РІРµСЂСЃРёСЏРјРё РїР»Р°РіРёРЅРѕРІ.
	$.wbcr_factory_templates_126.hooks = $.wbcr_factory_templates_126.hooks || $.wfactory_473.hooks;

	$.wbcr_factory_templates_126.app = $.wbcr_factory_templates_126.app || {
		/**
		 * РЎРѕР·РґР°РµС‚ Рё РїРѕРєР°Р·С‹РІР°РµС‚ СѓРІРµРґРѕРјР»РµРЅРёРµ РІРЅСѓС‚СЂРё РёРЅС‚РµСЂС„РµР№СЃР° Clearfy
		 *
		 * @param {string} message - СЃРѕРѕР±С‰РµРЅРёРµ РѕР± РѕС€РёР±РєРµ РёР»Рё РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ
		 * @param {string} type - С‚РёРї СѓРІРµРґРѕРјР»РµРЅРёСЏ (error, warning, success)
		 */
		showNotice: function(message, type) {
			var noticeContanier = $('<div></div>'),
				noticeInnerWrap = $('<p></p>'),
				dashicon = $('<span></span>'),
				dashiconClass,
				noticeId = this.makeid();

			if( !type ) {
				type = 'warning';
			}

			noticeContanier.addClass('alert', 'wbcr-factory-warning-notice')
				.addClass('alert-' + type).addClass('wbcr-factory-' + type + '-notice');

			noticeContanier.append(noticeInnerWrap);
			noticeContanier.attr('id', 'uq-' + noticeId);

			if( 'success' === type ) {
				dashiconClass = 'dashicons-plus';
			} else if( 'error' === type ) {
				dashiconClass = 'dashicons-no';
			} else {
				dashiconClass = 'dashicons-warning';
			}

			dashicon.addClass('dashicons').addClass(dashiconClass);
			noticeInnerWrap.prepend(dashicon);
			dashicon.after(message);

			$([document.documentElement, document.body]).animate({
				scrollTop: $('.wbcr-factory-content').offset().top - 100
			}, 300, function() {
				noticeContanier.hide();
				$('.wbcr-factory-content').prepend(noticeContanier);
				noticeContanier.fadeIn();

				/**
				 * РҐСѓРє РІС‹РїРѕР»РЅСЏРµС‚ РїСЂРѕРёРІРѕР»СЊРЅСѓСЋ С„СѓРЅРєС†РёСЋ, РїРѕСЃР»Рµ С‚РѕРіРѕ РєР°Рє СѓРІРµРґРѕРјР»РµРЅРёРµ РѕС‚РѕР±СЂР°Р¶РµРЅРѕ
				 * Р РµР°Р»РёР·Р°С†РёСЏ СЃРёСЃС‚РµРјС‹ С„РёР»СЊС‚СЂРѕРІ Рё С…СѓРєРѕРІ РІ С„Р°Р№Р»Рµ libs/clearfy/admin/assests/js/global.js
				 * РџСЂРёРјРµСЂ СЂРµРіРёСЃС‚СЂР°С†РёРё С…СѓРєР° $.wfactory_473.hooks.add('wbcr/factory_templates_126/updated',
				 * function(noticeId) {});
				 * @param {string} noticeId - id СѓРІРµРґРѕРјР»РµРЅРёСЏ
				 */
				$.wfactory_473.hooks.run('wbcr/factory_templates_126/showed_notice', [noticeId]);
				$.wfactory_473.hooks.run('wbcr/clearfy/showed_notice', [noticeId]);
			});

			return noticeId;
		},

		/**
		 * РЈРґР°Р»СЏРµС‚ СѓРІРµРґРѕРјР»РµРЅРёРµ РёР· РёРЅС‚РµСЂС„РµР№СЃР° Clearfy
		 *
		 * @param {string} noticeId - id СѓРІРµРґРѕРјР»РµРЅРёСЏ
		 */
		hideNotice: function(noticeId) {
			var el;
			if( !noticeId ) {
				el = $('.wbcr-factory-content').find('.alert');
			} else {
				el = $('#uq-' + noticeId);
			}

			el.fadeOut(500, function(e) {
				$(e).remove();

				/**
				 * РҐСѓРє РІС‹РїРѕР»РЅСЏРµС‚ РїСЂРѕРёРІРѕР»СЊРЅСѓСЋ С„СѓРЅРєС†РёСЋ, РїРѕСЃР»Рµ С‚РѕРіРѕ РєР°Рє СѓРІРµРґРѕРјР»РµРЅРёРµ СЃРєСЂС‹С‚Рѕ
				 * Р РµР°Р»РёР·Р°С†РёСЏ СЃРёСЃС‚РµРјС‹ С„РёР»СЊС‚СЂРѕРІ Рё С…СѓРєРѕРІ РІ С„Р°Р№Р»Рµ libs/clearfy/admin/assests/js/global.js
				 * РџСЂРёРјРµСЂ СЂРµРіРёСЃС‚СЂР°С†РёРё С…СѓРєР° $.wfactory_473.hooks.add('wbcr/factory_templates_126/updated',
				 * function(noticeId)
				 * {});
				 * @param {string} noticeId - id СѓРІРµРґРѕРјР»РµРЅРёСЏ
				 */
				$.wfactory_473.hooks.run('wbcr/factory_templates_126/hidded_notice', [noticeId]);
				$.wfactory_473.hooks.run('wbcr/clearfy/hidded_notice', [noticeId]);
			});
		},

		makeid: function() {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

			for( var i = 0; i < 32; i++ ) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}

			return text;
		}

	};

	$.wfactory_473.hooks.add('core/components/pre_activate', function(button) {
		// Р’С‹РїРѕР»РЅСЏРµРј РєРѕРґ РЅРёР¶Рµ, С‚РѕР»СЊРєРѕ РЅР° СЃС‚СЂР°РЅРёС†Р°С… РїР»Р°РіРёРЅР° СЃ РёРЅС‚РµСЂС„РµР№СЃРѕРј Clearfy
		if( !$('#WBCR').length ) {
			return false;
		}

		if( button.closest('.alert').length ) {
			button.closest('.alert').remove();
		}

		if( button.closest('.plugin-card').length ) {
			button.closest('.plugin-card').removeClass('plugin-status-deactive');
			button.closest('.plugin-card').find('.delete-now').remove();
		}
	});

	$.wfactory_473.hooks.add('core/components/deactivated', function(button, data, response) {
		// Р’С‹РїРѕР»РЅСЏРµРј РєРѕРґ РЅРёР¶Рµ, С‚РѕР»СЊРєРѕ РЅР° СЃС‚СЂР°РЅРёС†Р°С… РїР»Р°РіРёРЅР° СЃ РёРЅС‚РµСЂС„РµР№СЃРѕРј Clearfy
		if( !$('#WBCR').length ) {
			return false;
		}

		if( button.closest('.plugin-card').length ) {
			button.closest('.plugin-card').addClass('plugin-status-deactive');

			if( response.data['delete_button'] && response.data['delete_button'] !== '' ) {
				button.before($(response.data['delete_button']).addClass('delete-now'));
			}
		}

		if( button.closest('.wbcr-hide-after-action').length ) {
			button.closest('.wbcr-hide-after-action').remove();
		}
	});

	$.wfactory_473.hooks.add('core/components/deleted', function(button) {
		// Р’С‹РїРѕР»РЅСЏРµРј РєРѕРґ РЅРёР¶Рµ, С‚РѕР»СЊРєРѕ РЅР° СЃС‚СЂР°РЅРёС†Р°С… РїР»Р°РіРёРЅР° СЃ РёРЅС‚РµСЂС„РµР№СЃРѕРј Clearfy
		if( !$('#WBCR').length ) {
			return false;
		}

		let button_i18n = button.data('i18n');

		button.closest('.plugin-card').find('.install-now').data('plugin-action', 'install');
		button.closest('.plugin-card').find('.install-now').attr('data-plugin-action', 'install');
		button.closest('.plugin-card').find('.install-now').removeClass('button-primary').addClass('button-default');
		button.closest('.plugin-card').find('.install-now').text(button_i18n.install);

		if( button.closest('.plugin-card').length ) {
			button.closest('.plugin-card').addClass('plugin-status-deactive');
			button.remove();
		}
	});

	$.wfactory_473.hooks.add('core/components/activation_error', function(plugin, button, response) {
		// Р’С‹РїРѕР»РЅСЏРµРј РєРѕРґ РЅРёР¶Рµ, С‚РѕР»СЊРєРѕ РЅР° СЃС‚СЂР°РЅРёС†Р°С… РїР»Р°РіРёРЅР° СЃ РёРЅС‚РµСЂС„РµР№СЃРѕРј Clearfy
		if( !($('#WBCR').length && $.wbcr_factory_templates_126) ) {
			return false;
		}

		button.closest('.plugin-card').addClass('plugin-status-deactive');

		if( response.data && response.data.error_message ) {
			$.wbcr_factory_templates_126.app.showNotice(response.data.error_message, 'danger');
		}
	});

	$.wfactory_473.hooks.add('core/components/update_error', function(button, data, response) {
		// Р’С‹РїРѕР»РЅСЏРµРј РєРѕРґ РЅРёР¶Рµ, С‚РѕР»СЊРєРѕ РЅР° СЃС‚СЂР°РЅРёС†Р°С… РїР»Р°РіРёРЅР° СЃ РёРЅС‚РµСЂС„РµР№СЃРѕРј Clearfy
		if( !($('#WBCR').length && $.wbcr_factory_templates_126) ) {
			return false;
		}

		if( response.data && response.data.error_message ) {
			$.wbcr_factory_templates_126.app.showNotice(response.data.error_message, 'danger');
		}

	});

	$.wfactory_473.hooks.add('core/components/activated', function(button, data, response) {
		// Р’С‹РїРѕР»РЅСЏРµРј РєРѕРґ РЅРёР¶Рµ, С‚РѕР»СЊРєРѕ РЅР° СЃС‚СЂР°РЅРёС†Р°С… РїР»Р°РіРёРЅР° СЃ РёРЅС‚РµСЂС„РµР№СЃРѕРј Clearfy
		if( !$('#WBCR').length ) {
			return false;
		}

		button.closest('.plugin-card').removeClass('plugin-status-deactive');
	});

	$.wfactory_473.hooks.add('core/components/ajax_error', function(xhr, ajaxOptions, thrownError) {
		// Р’С‹РїРѕР»РЅСЏРµРј РєРѕРґ РЅРёР¶Рµ, С‚РѕР»СЊРєРѕ РЅР° СЃС‚СЂР°РЅРёС†Р°С… РїР»Р°РіРёРЅР° СЃ РёРЅС‚РµСЂС„РµР№СЃРѕРј Clearfy
		if( !($('#WBCR').length && $.wbcr_factory_templates_126) ) {
			return false;
		}

		$.wbcr_factory_templates_126.app.showNotice('Error: [' + thrownError + '] Status: [' + xhr.status + '] Error massage: [' + xhr.responseText + ']', 'danger');
	});

})(jQuery);
