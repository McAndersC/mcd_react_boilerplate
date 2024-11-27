import { useEffect, useState } from 'react';
import styles from '../../styles/modules/components/basic.module.css';
import { serverPath } from '../../services/settings';

const SubscriberItem = ({hest}) => {

    console.log("data", hest)
    
    return <div className={styles.listItem}>{hest.name} {hest.email}</div>

}

const SubscribersList = () => {

    const [list, setList] = useState([])
 
    useEffect( () => {
        
        const getSubscribers = async () => {

            console.log("getSubscribers")
            // let response = await fetch(serverPath + '/api/subscribers');
            let response = await fetch(`${serverPath}/api/subscribers`);
            let result = await response.json();

            console.log('Result', result.data)
            setList(result.data);
        }

        getSubscribers();

        
    }, [])

    return (
        <div className={styles.component}>
            SubscribersList

            {list.map( (subscriber) => {
                return <SubscriberItem key={subscriber._id} hest={subscriber}></SubscriberItem>
            })}
           
        </div>
    );
};
export default SubscribersList;