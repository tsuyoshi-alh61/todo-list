<html>
  <head>
    <title>ユーザーデータ</title>
    <style type="text/css">
      th { background-color:blue; color:fff; padding:2px 10px;}
      td { border:solid 2px; color:999; padding:2px 10px;}
    </style>
  </head>
  <body>
    <div>UserData</div>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
      @foreach($user_data as $user)
      <tr>
        <td>{{$user->id}}</td>
        <td>{{$user->name}}</td>
      </tr>
      @endforeach
    </table>
  </body>
</html>