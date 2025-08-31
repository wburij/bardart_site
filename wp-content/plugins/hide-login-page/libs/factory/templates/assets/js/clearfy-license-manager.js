/**
 * Р­С‚РѕС‚ С„Р°Р№Р» СЃРѕРґРµСЂР¶РёС‚ СЃРєСЂРёРїС‚ РёСЃРїРѕР»РЅСЏРµР»СЃСЏ РІРѕ РІСЂРµРјСЏ РїСЂРѕС†РµРґСѓСЂ СЃ С„РѕСЂРјРѕР№ Р»РёС†РµРЅР·РёСЂРѕРІР°РЅРёСЏ.
 * Р•РіРѕ РѕСЃРЅРѕРІРЅР°СЏ СЂРѕР»СЊ РѕС‚РїСЂР°РІРєР° ajax Р·Р°РїСЂРѕСЃРѕРІ РЅР° РїСЂРѕРІРµСЂРєСѓ, Р°РєС‚РёРІР°С†РёСЋ, РґРµР°РєС‚РёРІР°С†РёСЋ Р»РёС†РµРЅР·РёРё
 * Рё РІС‹РІРѕРґ СѓРІРµРґРѕРјР»РµРЅРёР№ РѕР± РѕС€РёР±РєР° РёР»Рё СѓСЃРїРµС€РЅРѕ РІС‹РїРѕР»РЅРµРЅРёРё РїСЂРѕРІРµСЂРѕРє.
 *
 * @author Alex Kovalev <alex.kovalevv@gmail.com>, Github: https://github.com/alexkovalevv
 * @copyright (c) 05.10.2018, Webcraftic
 * @version 1.1
 * @since 1.4.0
 */
jQuery(function($) {

	var allNotices = [];

	$(document).on('click', '.wcl-control-btn', function() {
		var wrapper = $('#wcl-license-wrapper'),
			loader = wrapper.data('loader'),
			pluginName = wrapper.data('plugin-name'),
			wpnonce = wrapper.data('nonce'),
			licenseAction = $(this).data('action');

		for( i = 0; i < allNotices.length; i++ ) {
			$.wbcr_factory_templates_126.app.hideNotice(allNotices[i]);
		}

		$('.wcl-control-btn').hide();

		$(this).after('<img class="wcl-loader" src="' + loader + '">');

		var data = {
			action: 'wbcr-clearfy-activate-license-for-' + pluginName,
			_wpnonce: wpnonce,
			plugin_name: pluginName,
			license_action: licenseAction,
			licensekey: ''
		};

		if( $(this).data('action').trim() === 'activate' ) {
			data.licensekey = $('#license-key').val().trim();
		}

		$.ajax(ajaxurl, {
			type: 'post',
			dataType: 'json',
			data: data,
			success: function(response) {
				var noticeId;

				if( !response || !response.success ) {

					$('.wcl-control-btn').show();
					$('.wcl-loader').remove();

					if( response.data ) {
						console.log(response.data.error_message);
						noticeId = $.wbcr_factory_templates_126.app.showNotice('Error: [' + response.data.error_message + ']', 'danger');
						allNotices.push(noticeId);
					} else {
						console.log(response);
					}

					return;
				}

				if( response.data && response.data.message ) {
					noticeId = $.wbcr_factory_templates_126.app.showNotice(response.data.message, 'success');
					allNotices.push(noticeId);

					// todo: РґРѕСЂР°Р±РѕС‚Р°С‚СЊ РіРµРЅРµСЂР°С†РёСЋ С„РѕСЂРјС‹, РІРјРµСЃС‚Рѕ РїРµСЂРµР·Р°РіСЂСѓР·РєРё СЃС‚СЂР°РЅРёС†С‹
					window.location.reload();
				}

			},
			error: function(xhr, ajaxOptions, thrownError) {

				$('.wcl-control-btn').show();
				$('.wcl-loader').remove();

				console.log(xhr.status);
				console.log(xhr.responseText);
				console.log(thrownError);

				var noticeId = $.wbcr_factory_templates_126.app.showNotice('Error: [' + thrownError + '] Status: [' + xhr.status + '] Error massage: [' + xhr.responseText + ']', 'danger');

				allNotices.push(noticeId);
			}
		});

		return false;
	});

});
