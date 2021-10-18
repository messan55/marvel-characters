import moment from "moment";

export const CaractherColumns = [
    {
        title: "id",
        dataIndex: "id",
        key: "id"
    },
    {
        title: "name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "date last update",
        dataIndex: "modified",
        key: "modified",
        render: (date) => moment(date).format('L'),
    },
    {
        title: "resource",
        dataIndex: "resourceURI",
        key: "resourceURI"
    }
];
