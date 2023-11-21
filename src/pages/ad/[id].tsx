import {useRouter} from "next/router";

const AdDetailComponent = () => {
    const router = useRouter();
    console.log(router);
    return <p>Display details of the ad with the id {router.query.id}</p>;
};

export default AdDetailComponent;