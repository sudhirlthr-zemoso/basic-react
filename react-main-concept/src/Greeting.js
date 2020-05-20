function greeting(user){
    if(user)
        return (
                    <div>
                        <h1 tabIndex="0">hello, {formatName(user)}</h1>
                        <img src={user.avatarUrl}></img>
                    </div>
                  );
     else
        return (
                    <h1>Hello Strangers</h1>
                );
}