import { FormControl, Select, CheckIcon } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTermFromDictionary } from '../../../translations/TranslationService';

export const SelectLinkedAccount = (props) => {
     console.log(props);
     const { user, isPlacingHold, activeAccount, setActiveAccount, accounts } = props;
     const insets = useSafeAreaInsets();

     return (
          <>
               <FormControl>
                    <FormControl.Label>{isPlacingHold ? getTermFromDictionary('en', 'linked_place_hold_for_account') : getTermFromDictionary('en', 'linked_checkout_to_account')}</FormControl.Label>
                    <Select
                         isReadOnly={Platform.OS === 'android'}
                         name="linkedAccount"
                         selectedValue={activeAccount}
                         minWidth="200"
                         accessibilityLabel={isPlacingHold ? getTermFromDictionary('en', 'linked_place_hold_for_account') : getTermFromDictionary('en', 'linked_checkout_to_account')}
                         _selectedItem={{
                              bg: 'tertiary.300',
                              endIcon: <CheckIcon size="5" />,
                         }}
                         _actionSheet={{
                              pb: Platform.OS === 'android' ? `${insets.bottom + 16}px` : 4,
                         }}
                         mt={1}
                         mb={3}
                         onValueChange={(itemValue) => setActiveAccount(itemValue)}>
                         <Select.Item label={user.displayName} value={user.id} />
                         {accounts.map((item, index) => {
                              return <Select.Item label={item.displayName} value={item.id} key={index} />;
                         })}
                    </Select>
               </FormControl>
          </>
     );
};