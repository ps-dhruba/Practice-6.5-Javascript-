var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let ans = friends[0];
for(let i=1; i<friends.length; i++)
{
    if(ans.length < friends[i].length)
    {
        ans = friends[i];
    }
}

console.log(ans);