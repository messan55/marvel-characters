import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Image, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
import { actionCreators } from "../actions";
import {
    characterItemLoadingSelector,
    characterItemPageSelector,
} from "../reducers/selectors";
import "./styles.css";

const CharacterItem  = () => {
    const { id } = useParams();
    const loading = useSelector(characterItemLoadingSelector);
    const character = useSelector(characterItemPageSelector);
    const history = useHistory();
    
    const dispatch = useDispatch();

    useEffect(() => {
        const requestPayload = {
          id,
        };
        dispatch(actionCreators.loadCharacterItem(requestPayload));
    }, [dispatch, id]);

    const handleClick = () => history.push("/characters");

    const data = !loading && character;
    return (
        !loading &&
        <>
            <Button onClick={handleClick}>Back</Button>
            <Col span={12} offset={6}>
                <div className="character">
                    <h3 className="character__title">Marvel character</h3>
                    <Image src={`${data?.thumbnail?.path}/portrait_uncanny.${data?.thumbnail?.extension}`} />
                    <h2 className="character__name">{data?.name}</h2>
                </div>
            </Col>
        </>
    );
};

export default CharacterItem;
