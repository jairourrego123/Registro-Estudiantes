using AutoMapper;
using RegistroEstudiantes.ContratoDatos.DTOs;
using RegistroEstudiantes.Datos.modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RegistroEstudiantes.Mapeo
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Estudiante, EstudianteDTO>().ReverseMap();
            CreateMap<Materia, MateriaDTO>().ReverseMap();
            CreateMap<Profesor, ProfesorDTO>().ReverseMap();
        }
    }
}
