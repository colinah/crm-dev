import React , { Component } from 'react';
import Post from './Post/Post';

class Posts extends Component {
   state = {
       postData:[{type:'staging',
       date:'Apr 15, 2020 at 3:06 PM MDT',
       projectName: 'Project Name',
       link:'http://staging.project.com/test'},
       {type:'design',
       date:'Apr 15, 2020 at 3:07 PM MDT',
       projectName: 'Project Name',
       link: 'Link to Design'},
       {type:'staging',
       date:'Apr 15, 2020 at 3:08 PM MDT',
       projectName: 'Project Name',
       link:'http://staging.project.com/test'},
       {type:'staging',
       date:'Apr 15, 2020 at 3:09 PM MDT',
       projectName: 'Project Name',
       link:'http://staging.project.com/test'}]
    };

    render() {
        let postsDisplay = this.state.postData.map(data => (
            <Post 
                type={data.type}
                date={data.date}
                projectName={data.projectName}
                link={data.link}
                />
        ))

        return (
            <div>
                {postsDisplay}
            </div>
        )
    }
}

export default Posts;