/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * WordPress dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { store as preferencesStore } from '@wordpress/preferences';
import { __ } from '@wordpress/i18n';

/**
 * SolidWP dependencies
 */
import { Notice } from '@ithemes/ui';

const StyledNotice = styled( Notice )`
	align-self: flex-start;
`;

export default function UserGroupNotice( { } ) {
	const { toggle } = useDispatch( preferencesStore );
	const { showUserGroupNotice } = useSelect( ( select ) => ( {
		showUserGroupNotice: select( preferencesStore ).get( 'ithemes-security/users', 'howToEditUserGroups' ),
	} ), [] );

	return (
		<>
			{ showUserGroupNotice && (
				<StyledNotice
					text={ __( 'Filter the user groups whose security requirements youвЂ™d like to edit with the вЂњEdit User Group SettingsвЂќ feature.', 'better-wp-security' ) }
					onDismiss={ ( ) =>
						toggle( 'ithemes-security/users', 'howToEditUserGroups' )
					}
				/>
			) }
		</>
	);
}
