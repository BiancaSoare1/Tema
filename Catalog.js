
function deseneazaTabel() {
			var str = "";
			for (var i = 0; i < persoane.length; i++) {
				str += `<tr>
								<td><img width =50 src="https://i.ytimg.com/vi/nhqiz5wAiwM/maxresdefault.jpg" /></td>
								<td>${persoane[i].nume}</td>
								<td>${persoane[i].prenume}</td>
								<td>${persoane[i].telefon}</td>
								<td>
									<button class="deleteBtn" onclick="sterge(${i});">DELETE</button>
									<button class="editBtn" onclick="editeaza(${i});">EDIT</button>
								</td>
							</tr>`;
			