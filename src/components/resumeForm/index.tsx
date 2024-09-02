import { ScrollArea } from '../ui/scroll-area';
import Education from './Education';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

const index = () => {
    return (
        <ScrollArea className="h-dvh whitespace-nowrap pb-5">
            <PersonalDetails />
            <WorkExperience />
            <Education />
            <Skills />
        </ScrollArea>
    );
};

export default index;
