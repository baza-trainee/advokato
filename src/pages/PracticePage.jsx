import { Enforcement } from '../components/Enforcement';
import { CivilProcess } from '../components/CivilProcess';
import { FamilyLaw } from '../components/FamilyLaw';
import { IntellectualProperty } from '../components/IntellectualProperty';

export const PracticePage = () => {
  return (
    <>
      <IntellectualProperty />
      
      <Enforcement />

      <FamilyLaw />

      <CivilProcess />
    </>
  );
};

export default PracticePage;
