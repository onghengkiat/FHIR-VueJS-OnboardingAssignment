import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Patient Card', () => {
  const DEFAULT_PATIENT_NAME_FIELD = "Name: Default Patient Name";
  const MOCK_DATA = {
    name: "Jim",
    gender: "Male",
    birthdate: "1974-12-25",
    address: "534 Erewhon St PeasantVille, Rainbow, Vic 3999",
  };

  function wrapperFactory({ wrapperProps } = {}) {
    return mount(Card, {
      props: {
        ...wrapperProps
      },
    });
  };

  let wrapper = null;

  afterEach(() => { wrapper.unmount(); })

  it('Only name field exists', () => {
    wrapper = wrapperFactory({
      wrapperProps: {
        name: MOCK_DATA["name"],
      }
    })

    expect(wrapper.find(".card_birthdate_field").exists()).toBeFalsy();
    expect(wrapper.find(".card_gender_field").exists()).toBeFalsy();
    expect(wrapper.find(".card_address_field").exists()).toBeFalsy();
    expect(wrapper.find(".card_name_field").exists()).toBeTruthy();
  })

  it('Name field does not exist', () => {
    wrapper = wrapperFactory({
      wrapperProps: {
        gender: MOCK_DATA["gender"],
        birthdate: MOCK_DATA["birthdate"],
        address: MOCK_DATA["address"],
      }
    })

    expect(wrapper.find(".card_birthdate_field").exists()).toBeTruthy();
    expect(wrapper.find(".card_gender_field").exists()).toBeTruthy();
    expect(wrapper.find(".card_address_field").exists()).toBeTruthy();
    expect(wrapper.find(".card_name_field").exists()).toBeTruthy();
    expect(wrapper.find(".card_name_field").text()).toBe(DEFAULT_PATIENT_NAME_FIELD);
  })

})
