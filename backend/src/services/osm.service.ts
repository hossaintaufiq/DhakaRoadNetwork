import osmRead from "osm-read";
import path from "path";

const nodes: any[] = [];

export const loadMap = () => {
    const filePath = path.resolve("data", "bangladesh-260706.osm.pbf");

    let printed: boolean = false;

    osmRead.parse({
        filePath,

        node: (node: any) => {
            if (nodes.length < 10) {
                nodes.push(node);
            }
        },

        way: (way: any) => {
            if (!printed) {
                console.log("First Way:");
                console.log(JSON.stringify(way, null, 2));
                printed = true;
            }
        },

        relation: (relation: any) => {
            // console.log(relation);
        },

        endDocument: () => {
            console.log(`Loaded ${nodes.length} nodes`);
        },

        error: (err: any) => {
            console.error(err);
        },
    });
};

export const getNodes = () => {
    return nodes;
};