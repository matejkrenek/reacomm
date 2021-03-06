import { Title } from "."

const SectionHeader = ({ content }) => {
    return ( 
        <div className="bg-gray-200 py-8 mb-8">
            <Title text={content}/>
        </div>
    );
}
 
export default SectionHeader;