import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreators } from "../actions";
import {
    charactersLoadingSelector,
    charactersPageSelector,
    charactersRequestPayloadSelector
} from "../reducers/selectors";

import { Table, Col} from "antd";
import { CaractherColumns } from "./CharacterColums";

const CharactersTable  = () => {
    const loading = useSelector(charactersLoadingSelector);
    const characters = useSelector(charactersPageSelector);
    const charactersRequestPayload = useSelector(charactersRequestPayloadSelector);
    const [charactersQuery, setCharactersQuery] = useState(charactersRequestPayload);
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        const currentCharacters = charactersQuery;
        dispatch(actionCreators.loadCharacters(currentCharacters));
    }, [charactersQuery, dispatch]);

    const columns = CaractherColumns; 

    const data = characters?.results.map((item) => {
        return {
            ...item,
            key: item.id,
            chosen: true,
        };
    });

    const pagination = {
        showSizeChanger: false,
        pageSize: 20,
        total: characters?.total,
    };

    const handleTableChange = (data, setData) => {
        return (pagination) => {
            let options = {
                ...data,
                limit: 20,
                offset: pagination.current * 20 - 20,
            }    
            setData(options)
        }
    }

    const row = (record) => {
        return {
            onClick: () => {
                history.push(`/character/${record.id}`);
            },
        };
    };

    return (
        <Col span={18} offset={3}>
            <h3 className="table-character">Marvel table characters</h3>
            <Table
                size="middle"
                loading={loading}
                dataSource={data}
                columns={columns}
                onRow={row}
                onChange={handleTableChange(charactersQuery, setCharactersQuery)}
                pagination={pagination}
                rowClassName="clickable"
            />
        </Col>
    );
};

export default CharactersTable;
