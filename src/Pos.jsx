export default function Post({post}){
    console.log(post)
    const {username,address,id,email} = post
    return(
        <div className="post">
            <h5>Title: {username}</h5>
            <h3>City: {address.city}</h3>
            <p><small>User: {email}</small></p>
            <p><small>PostId: {id}</small></p>
        </div>
    )
}