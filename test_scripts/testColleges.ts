import axios from 'axios';
import { faker } from '@faker-js/faker';


function generateRandomCollegeName(): string {
    const collegePrefixes = [
      'School of',
      'College of',
      'Institute of',
      'Academy of',
      'State',
      'Community',
    ];
  
    const collegeSuffixes = [
      'Technology',
      'Science',
      'Engineering',
      'Arts and Sciences',
      'Business',
      'Medicine',
      'Law',
      'Education',
      'Liberal Arts',
      'Nursing',
      'Fine Arts',
      'Agriculture',
      'Veterinary Medicine',
      'Music',
      'Theology',
      'Philosophy',
      'Design',
      'Health Sciences',
      'Humanities',
      'Social Sciences',
      'Communication',
    ];
  
    const randomPrefix = faker.helpers.arrayElement(collegePrefixes);
    const randomSuffix = faker.helpers.arrayElement(collegeSuffixes);  
    const collegeName = `${randomPrefix} ${faker.company.name()} ${randomSuffix}`;  
    return collegeName;
  }

const generateRandomCollege = () => {
  return {
    name: generateRandomCollegeName()
  };
};

const post = async (count: number) => {
  for (let i = 0; i < count; i++) {
    const college = generateRandomCollege();
    try {
      const response = await axios.post('http://localhost:4000/api/colleges', college);
      console.log(`College ${i + 1} created:`, response.data);
      console.log(college);
    } catch (error) {
      const err = error as Error;
      console.error(`Failed to create college ${i + 1}:`, err.message);
    }
  }
};

// Run the script
post(10);
