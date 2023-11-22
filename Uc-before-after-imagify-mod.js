{
key: "createElements",
                                        value: function () {
                                            var e = document.createElement("span");
                                            (e.className = this.options.dragElementSelector.replace(".", "")), this.element.appendChild(e);
                                            
                                            //Modification to work with imagify. The if else statement will check for img or picture tag in order to use the before after slide feature
                                            if ( n =="img:first-child"){                                    
                                                var t = document.createElement("div"),
                                                n = this.element.querySelector("img:first-child");
                                                t.appendChild(n.cloneNode(!0)),
                                                n.parentNode.replaceChild(t, n),
                                                (this.dragElement = this.element.querySelector(this.options.dragElementSelector)),
                                                (this.beforeElement = this.element.querySelector("div:first-child")),
                                                (this.beforeImage = this.beforeElement.querySelector("img"));
                                            }
                                            else {
                                                var t = document.createElement("div"),
                                                n = this.element.querySelector("picture:first-child");
                                                t.appendChild(n.cloneNode(!0)),
                                                n.parentNode.replaceChild(t, n),
                                                (this.dragElement = this.element.querySelector(this.options.dragElementSelector)),
                                                (this.beforeElement = this.element.querySelector("div:first-child")),
                                                (this.beforeImage = this.beforeElement.querySelector("img"));
                                            }    
                                        },
                                    },
