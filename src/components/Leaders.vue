<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col" colspan="3">Leader Board</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><b>Leader</b></td>
                <td class="text-center"><b>Score</b></td>
            </tr>
            <tr>
                <td>leader.name</td>
                <td class="text-center">leader.score</td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="css" scoped>
    .leaderboard th {
    background: #e74430;
    border: 0px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    }
    .table-hover tbody tr:hover {
        background-color: rgba(0,0,0,.075);
    }
</style>