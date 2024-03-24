setInterval(() => {
    let create_time = Math.round(new Date('2024-03-10 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);
  
    var nol = function(h){
      return h>9?h:'0'+h;
    }
    if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
    }
    if (second >= 3600) {
      time[2] = nol(parseInt(second / 3600));
      second %= 3600;
    }
    if (second >= 60) {
      time[3] = nol(parseInt(second / 60));
      second %= 60;
    }
    if (second > 0) {
      time[4] = nol(second);
    }
      currentTimeHtml =`<img class='boardsign' src= 'https://img.shields.io/badge/不晚-科研摸鱼中-6adea8?style=social&logo=data%3Aimage%2Fjpeg%3Bbase64%2CUklGRjQKAABXRUJQVlA4TCgKAAAvP8APEBWHgrZtJIc%2F7O0eCBExAVC1QCNKhdNvStr%2BKZKUf9kY7u6uESnt3l0RiVfhbqOX4PQZmsUF%2Fjt8LHAI9ATOzt0drmB7d2fP3kmWdYJc4bLjJDyxHp5Hbm1tjqRsMpsFYkQEJICPpTV4uNJbrbXe7VL%2FV%2F%2F3118FgQHJtt22TRuFkmwTHyQApncXEUjZ%2F3Yydpk650iWZNu0Ldu2bePZVuv%2BwLPt1ovXtW39gL157Xts2%2Bds4y4IbttIkmRojj3dNV2FvEGOA0COpHzJYTJvzlu8h%2B497%2F1Ndw%2F7dqar1s0H5gd4opqIJ%2FCRC%2FkEXyBskc8%2FEHFpc0IXr0hbIiwROcmBALBl9OKz2SzJrLNt276fOYwkt20FcYR%2FEASYSUcnAgCoSSORl3BI1smkfQD9BNF5g0PlI%2FMNm%2BDu7u5%2BDtxGUqTMeuFw8RPtlXNCe%2BUcj6b0X3utt10KVzyooKwOSdL2oRSuw8GPUkQsZxy5nIMZy%2FpKwOS5wrszAXAIYDJIdJ7hmQuAFQAG%2BNryqCZHeHfFIwDz5xw9ycCMz%2Bk9yQ0y4UdeEFNELDcs5nKWmBHEFAG%2BWjZ5TpBN%2FMTnRCJKEbGOo1Y7Dxy3ZwczZeSwzUWNeK6ICC4OKsjIhM5y1M7evSbdHLQboK5zyeBi7LMJT4SBCC4y4eJM8lzggL1333XOUVfDwOmqja1NNZ8IA8HF8HWoMyFNCFXvfsM56gooFRA1b%2FshvxMq0J5hyaHb3uZ6ux1gt5a5VBX0pxOjuRo2XSU9b7eB7NZS2J%2FIBamCjvm6E56320B2ayl8ccBEEbRcXvWm5%2B02kN1aCp%2BImogccOhwhPnF%2B%2FmVArvPy24thc5NocI6VguGA5Xdx223lpIucTNysKDiUL6TqzUCQtFztw5J5AhBR4jWIYnh7kQqjNC5uVpGFOKOwhR0UMm0zLsfP3%2B1drdYFpjIEViXShDYnUETqZNI3HSZECcRe1OL2QfCEQ9ZIlGHBL0n%2BtLa3fJIEjNRNMDejo9aUWdOCJWQv03RCoBlx0konHK0QAWWTemILSJKQczwbjETmW1WlvshGD8VxZvB73cCo73RHJCHEPkAtTl0vHdo7LRmuuWvLEdqSFGmRBRN%2FLGBB8hMhtkALwYBF4Wcv10GLZImVg4yVpwAB5PLMYPk7qAxuhWgKCyLyRFPHidxsTd2xt7UsmR7HJaz4dDLvvjVkToKkZOfD4%2BmuIlvJgJZtYwc3e4dMr1dbAjFn68Abyg58CAf9od5ty3eGodF1SXbY3POku20a%2FHOIH4uRbUC6GrZ9TyiFOXvCC6RoduZ9f3%2FJ4l8A5XIyGUfVTvmITiC0xF%2FkBXyrpXLTtUcHEld31%2B8k3YgDqndP%2FZ0AS%2FZToRkVW2rKgBENHQ7S5EL95ujbkuyfWTodv73e5ENQbVjSRAnQB55ZN0%2FiKTbaZe4eo86W0KLdwa%2FsFrIG43QxGGyIjKpFZLtQ3Jz0vAQwlwjcgivm8YAS7ZT%2BJizPJaa%2BtyjiMOX98nUTelcYhI5%2FDLDZ24MrixV870lvgh2czLwLA4WhpuMS74IXV71zIes1WLBEQP81BplF0I4c3fyHHW6gJOmQee%2BvQkRY69DpJuQX2GkQk6OBvmwHqfqaNdUDrVYdVZEAheiB6GL0vYFJverqFvxCFnbdmYhNixcCA87dTe5WAQdjXLO%2FURHW44iZNhN6QoTqO%2Bo0xW8eGdkVqzfYAoHmq6yKs8SAmkVhdh%2Fvsn9qqp2PQWfZSyhuOUopVt%2BvTyexNsXIqS3Gyix19%2BnRKImk67QDalaT94f8Py2QB%2Fseu95JGIIZe4JJ5jazaJu%2BRn4j6QozxuDhhx%2FftYvwPj2JmUHxzd1Na0iyjs9bhI59jz%2FOev7tVZm4rBz3VKEAeSoVVxwebUY3fJ7AOlmZaEDTQszq5l%2BDVFX8WXNuUtF7ggHmupmapngQCRkUphzHPHjuzEZeAmf9DAHxmM389hpjx%2Ff7ui%2BXHYL4bPE1Z1hy4h8%2FH3s9637vtadu%2FEnSiNuskvHWNFrg5TLq1mzzAFRnC86h4QQdCsAVm3qmcvaNXJm7LR2AsbFx%2B2eeryI2GuAuqpu0p27LHMvE%2F78ZVAzcjmXPYPpyHvMZQOhgSoBLNkKeapWzUiD8eV%2FHNyrnLuHfBhz2R2OcMF00Kerqk4b4IcvHc8SCw2oallwInFyeTnrzfaPRczym3z0gfx57gcVsQRrZapTljf6jbNCruPrzTbYF6yqlQt7iGyPH9a6%2Bf55FmGd%2B4MifC07XPRY6P3RpyvJMZfLP0FF9avFa%2BnHwSkTNv18Flcd2EcOPphJDpjqsASRRZjaE03OCKARM4iDPSqqp26OcyPg6Rkw1BZMcMDEAdEkjxRgwgdRhGOZw4F7HCwo8ALXHHhmOjE6lgs2KFUSqRLiJkpdVRzsV1A8fSNJEwrh8kRN2LSpdqTp6BQYntUyyiprH5O9hAV8bIdagEoy4R4OoHe2BRO3j7HgA00UdBglb1Xp1B9klSp3guzpG4MmZQk4XS69YEwZnwmAb%2FyZBWD8hAZQmwN720WGmZxzqlKGrU4%2FJiF55kYKDlUxOk3kfoRmix5k7%2BjqOQENSSZLIb1dI73RBp27Xlpf4ZkbSZx94EmjRI0jYg9Gvw15NvNHVLmOVv1i0JHe6JlasRAqL%2Bic0k%2Fqxpik0C%2FJITXbji%2FxTdlCq8pUiZtrX7%2Bd3MGf4Q1ss1in0w1zoi3FUHnBKTujpGZdqLHzC7nVbu1v6F79Dj%2FQTatKVNU01D0Fpp%2Fx5%2F8plHqKjBZ0pDf%2BgNHku7UnZKv2hrfczWABpGxc13IeiRMs3k7EJmVtKKW0ODs38c%2FJndoLvF%2B%2FnSHDKNoNUFeCiF1PXuf0YsPTtv2te4O2ltRaMKUaYIAaHBwQ75Ccp9Pre6TU5aUNbC3Z8fqpv%2BjsBfRHpdaaOKiLi7MTS3kEePqk%2FdUCMJZKfZd6mh8XFMZvMTBova%2B%2FvnFeq7kQt2Q7sZuWjdbg6zVxdr3tdV0hEcwfmvT%2Fx%2FUWap8WyOTrr9fT%2FKSQ4L0MLBijZZNd0tSYMeqBwYDsyguIX5oFcy99dXN%2B8MX1MaC7zV2A8bjA3Hn9JcaKwFCBRWt3vn%2FdmR9egfVGoBtNXcq3L7CfO8H8gUmwYMH8Dky%2FKfD%2FIro729uOWJ7s%2F8K%2Fng3mb%2B%2FWW5ZvWs%2BdwCi9RC%2FQSbB4CR5ViEcs993d%2BQGs7Mz2XYigvR3M34A5qbW8A%2FS3wnbuBPZTOmulU%2FU8%2FwbGQdDfTETEzvxwdeXK7vxwBRGxWd7SG9O8r57m3zXppGpZAuOM7dy5CsxtZQmMCDAcoK6pFUfraX7ZmHYX511tN23%2FcpWOcjqLI7ZyZXe2R5WKuz2jtNb1Zh3QLwPjFVig64Dhz9fmBeDcUXju1HXpzI%2BRlSuvkrvY9yso3rVy5XMFxaJ1jn30l9%2Bd7W9054ebv58N9rYLAg%3D%3D' title='距离百年老店也就差不到一百年~'> \
      <div style ='font-size: 13px; font-weight: bold'> \
      本站居然运行了${time[1]}天${time[2]}小时${time[3]}分${time[4]}秒  \
        <i id="heartbeat" class='fas fa-heartbeat' style='color:red'> </i> \
      </div>`; 
    document.getElementById("workboard").innerHTML = currentTimeHtml;
  }, 1000);