import React from 'react';
import { List, Avatar } from '@arco-design/web-react';

function Home() {
    return (
        <div className='menu-demo'>
        <List
            dataSource={new Array(4).fill({
                title: 'Beijing Bytedance Technology Co., Ltd.',
                description: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
            })}
            render={(item, index) => (
                <List.Item key={index}>
                    <List.Item.Meta
                        avatar={<Avatar shape='square'>A</Avatar>}
                        title={item.title}
                        description={item.description}
                    />
                </List.Item>
            )}
        />
        </div>
    );
}

export default Home;
