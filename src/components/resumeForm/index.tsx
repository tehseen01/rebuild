import { ScrollArea } from '../ui/scroll-area';
import PersonalDetails from './PersonalDetails';
import WorkExperience from './WorkExperience';

const index = () => {
    return (
        <ScrollArea className="h-dvh whitespace-nowrap pb-5">
            <PersonalDetails />
            <WorkExperience />
        </ScrollArea>
    );
};

export default index;
