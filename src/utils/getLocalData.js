export default function getUSerInfo()
{
    return {
        user: JSON.parse(localStorage.getItem('currentUser'))
    }
}

