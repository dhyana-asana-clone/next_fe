import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../src/fontawesome';

export default function Index() {
    return (
        <div className='bg-grey-muted'>
            <div className='p-3'>
                <FontAwesomeIcon icon={['far', 'acorn']} />
                <FontAwesomeIcon icon={['far', 'plus']} />
            </div>
        </div>
    );
}
