
        function myAjax(options){
            const xhr = new XMLHttpRequest();
            const qs = resolveData(options.data);// 拼接查询字符串
            if(options.method.toUpperCase() === 'GET'){
                xhr.open(options.method,options.url + '?' + qs);
                xhr.send();
            } else if(options.method.toUpperCase() === 'POST'){
                xhr.open(options.method,options.url );
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(qs);
            }


            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    // const result = JSON.parse(xhr.responseText);
                    options.success(xhr.responseText);

                }
            }
        };
        function resolveData(data){// 拼接查询字符串
        let arr =[]
        for(let k in data){
            arr.push(k + ' = ' +data[k])
        }
        return arr.join('&');

        };
