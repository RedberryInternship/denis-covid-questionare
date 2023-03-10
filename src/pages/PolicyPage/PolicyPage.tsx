import { Form, RadioInput, SubmitButton, TextAreaInput } from 'components';
import {
  nonFormalMeetingsOptions,
  numberOfDaysFromOfficeOptions,
} from './radioOptions';
import { usePolicyPage } from './usePolicyPage';

const PolicyPage = () => {
  const { handleSubmit, onSubmit } = usePolicyPage();

  return (
    <>
      <Form
        navClasses='relative -mt-28'
        formClasses='mb-64 pb-64'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='text-1.5xl mb-11 w-156'>
          <p>
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p className='mt-7 text-1.5xl'>
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>
        <RadioInput
          name='non_formal_meetings'
          label='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'
          options={nonFormalMeetingsOptions}
          validationRules={{ required: 'აირჩიე ერთ-ერთი პასუხი' }}
        />
        <RadioInput
          name='number_of_days_from_office'
          label='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
          options={numberOfDaysFromOfficeOptions}
          validationRules={{ required: 'აირჩიე ერთ-ერთი პასუხი' }}
        />
        <TextAreaInput
          name='what_about_meetings_in_live'
          labels={['რას ფიქრობ ფიზიკურ შეკრებებზე?']}
        />
        <div className='mt-12'>
          <TextAreaInput
            name='tell_us_your_opinion_about_us'
            labels={[
              'რას ფიქრობ არსებულ გარემოზე:',
              'რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?',
            ]}
          />
        </div>
        <div className='text-right mt-13'>
          <SubmitButton label='დასრულება' />
        </div>
      </Form>
      <img
        src='/assets/background-policy.png'
        alt=''
        className='right-50 mt-20 mr-17 animate-fade-in fixed'
      />
    </>
  );
};

export default PolicyPage;
